import re

from . import english
from flask import request, jsonify
from datetime import datetime

from .. import db
from ..models import Paragraph, SentenceResult, EssayCatalog, Essay, EssayResult, ParagraphDegree, Ranking, User


@english.route('/essay_catalog', methods=['GET'])
def essay_catalog():
    categories = []
    category_data = EssayCatalog.query.filter(EssayCatalog.pid.is_(None)).all()
    for i in category_data:
        category = i.to_json()
        category_id = category['id']
        textbooks = []
        textbook_data = EssayCatalog.query.filter_by(pid=category_id).all()
        for j in textbook_data:
            textbook = j.to_json()
            textbook_id = textbook['id']
            essays = []
            essay_data = EssayCatalog.query.filter_by(pid=textbook_id).all()
            for k in essay_data:
                essay = k.to_json()
                essay_id = essay['id']
                essay_info = Essay.query.filter_by(essay_id=essay_id).first()
                # essay_type = essay_info.to_json()['type']

                essay['type'] = essay_info.type
                essays.append(essay)
            textbook['essays'] = essays
            textbooks.append(textbook)

        category['textbooks'] = textbooks
        categories.append(category)
    return jsonify({'code': 200, 'data': categories})


@english.route('/essay_degree', methods=['POST'])
def essay_degree():
    essay_id = request.json.get('essay_id')
    data = []
    easy_paragraph = ParagraphDegree.query.filter_by(essay_id=essay_id, grade='简单').first()
    medium_paragraph = ParagraphDegree.query.filter_by(essay_id=essay_id, grade='中等').first()
    hard_paragraph = ParagraphDegree.query.filter_by(essay_id=essay_id, grade='困难').first()
    if easy_paragraph is not None:
        data.append({'label': '简单', 'value': '简单'})
    if medium_paragraph is not None:
        data.append({'label': '中等', 'value': '中等'})
    if hard_paragraph is not None:
        data.append({'label': '困难', 'value': '困难'})
    return jsonify(data)


@english.route('/sentence', methods=['POST'])
def sentence_get():
    essay_id = request.json.get('essay_id')
    user_id = request.json.get('user_id')
    grade = request.json.get('grade')
    english_paragraph = Paragraph.query.filter_by(essay_id=essay_id).all()
    data = []

    for i in english_paragraph:
        sentence = i.to_json()
        select_id = ParagraphDegree.query.filter_by(essay_id=essay_id, grade=grade, sen_id=sentence['sen_id']).first()
        id_list = select_id.to_json()
        id_list = id_list['word_id'].split(',')
        article_data = sentence['article']

        sentence_article = split_word(article_data)
        sentence['article'] = []
        num = 0

        for k in sentence_article:
            if 'word_id' in k:
                if k['word_id'] in id_list:
                    sentence['article'].append({'id': k['word_id'], 'text': k['word'], 'type': 'select'})
                    num += 1
                else:
                    sentence['article'].append({'id': k['word_id'], 'text': k['word'], 'type': 'normal'})
            else:
                sentence['article'].append({'text': k['word'], 'type': 'normal'})
        sentence['select_num'] = num
        data.append(sentence)

    audio_address = Essay.query.filter_by(essay_id=essay_id).first()
    exercise_num = EssayResult.query.filter_by(essay_id=essay_id, user_id=user_id, grade=grade).count()

    paragraphs = SentenceResult.query.filter_by(essay_id=essay_id, user_id=user_id, grade=grade,
                                                exercise_num=exercise_num + 1).all()

    if len(paragraphs) == 0:
        start_id = 0
        correct_num = 0
        all_num = 0
        time = 0
    else:
        start = paragraphs[-1].to_json()
        start_id = int(start['sen_id'])
        correct_num = 0
        all_num = 0
        time = 0
        for i in paragraphs:
            paragraph_data = i.to_json()
            sentence = [item for item in data if item['sen_id'] == paragraph_data['sen_id']]
            word_id = paragraph_data['word'].split(',')
            word_num = paragraph_data['num'].split(',')
            word_time = paragraph_data['time'].split(',')

            for k in sentence[0]['article']:
                if k['type'] == 'select':
                    if str(k['id']) in word_id:
                        index = word_id.index(str(k['id']))
                        if word_num[index] == '1':
                            k['type'] = 'correct'
                        else:
                            k['type'] = 'error'
            for j in word_num:
                if j == '1':
                    correct_num += 1
                all_num += 1
            for h in word_time:
                time += int(h)
    return jsonify(
        {'audio_address': audio_address.to_json()['audio_address'], 'data': data, 'exercise_num': exercise_num + 1,
         'start_id': start_id, 'correct_num': correct_num, 'all_num': all_num, 'time': time})


@english.route('/result_sentence', methods=['POST'])
def result_sentence():
    user_id = request.json.get('user_id')
    essay_id = request.json.get('essay_id')
    sen_id = request.json.get('sen_id')
    grade = request.json.get('grade')
    word = request.json.get('word')
    num = request.json.get('num')
    time = request.json.get('time')
    exercise_num = request.json.get('exercise_num')
    result = SentenceResult(user_id=user_id,
                            essay_id=essay_id,
                            grade=grade,
                            sen_id=sen_id,
                            word=word[:-1],
                            num=num[:-1],
                            time=time[:-1],
                            exercise_num=exercise_num)
    db.session.add(result)
    db.session.commit()
    return jsonify({'code': 200})


@english.route('/result_essay', methods=['POST'])
def result_essay():
    user_id = request.json.get('user_id')
    essay_id = request.json.get('essay_id')
    grade = request.json.get('grade')
    score = request.json.get('score')
    time = request.json.get('time')
    exercise_num = request.json.get('exercise_num')
    now = datetime.now()
    result = EssayResult(user_id=user_id,
                         essay_id=essay_id,
                         grade=grade,
                         score=round(score, 0),
                         time=time,
                         exercise_num=exercise_num,
                         current_time=now.strftime("%Y-%m-%d %H:%M:%S"))
    db.session.add(result)
    db.session.commit()

    user_name = User.query.filter_by(user_id=user_id).first()
    ranking = Ranking.query.filter_by(user_name=user_name.to_json()['username']).first()
    if ranking is None:

        ranking_data = Ranking(user_name=user_name.to_json()['username'],
                               essay_num='1',
                               score=round(score, 0))
        db.session.add(ranking_data)
        db.session.commit()
    else:
        ranking_data = ranking.to_json()
        essay_num = int(ranking_data['essay_num']) + 1
        essay_score = int(ranking_data['score']) + round(score, 0)
        ranking.essay_num = str(essay_num)
        ranking.score = round(essay_score / essay_num, 0)
        db.session.commit()

    return jsonify({'code': 200})


@english.route('/exercise_result', methods=['POST'])
def exercise_result():
    user_id = request.json.get('user_id')
    result = EssayResult.query.filter_by(user_id=user_id).all()
    data = []
    for i in result:
        essay = i.to_json()
        essay_id = essay['essay_id']
        essay_info = EssayCatalog.query.filter_by(id=essay_id).first()
        essay_title = essay_info.to_json()['label']
        essay['essay_title'] = essay_title
        essay['current_time'] = essay['current_time'].strftime("%Y-%m-%d %H:%M:%S")
        data.append(essay)
    return jsonify(data)


@english.route('/content_result', methods=['POST'])
def content_result():
    user_id = request.json.get('user_id')
    essay_id = request.json.get('essay_id')
    exercise_num = request.json.get('exercise_num')
    grade = request.json.get('grade')
    result = SentenceResult.query.filter_by(user_id=user_id, essay_id=essay_id, exercise_num=exercise_num,
                                            grade=grade).all()
    essayList = []
    for i in result:
        sentence = i.to_json()
        num_list = sentence['num'].split(',')
        id_list = sentence['word'].split(',')
        sentence_info = Paragraph.query.filter_by(sen_id=sentence['sen_id'], essay_id=sentence['essay_id']).first()
        sentence_article = sentence_info.to_json()['article']
        word = split_word(sentence_article)
        data_list = []

        for k in word:
            if 'word_id' in k:
                if k['word_id'] in id_list:
                    index = id_list.index(k['word_id'])
                    if num_list[index] == '1':
                        data_list.append({'id': k['word_id'], 'text': k['word'], 'type': 'correct'})
                    else:
                        data_list.append({'id': k['word_id'], 'text': k['word'], 'type': 'wrong'})
                else:
                    data_list.append({'id': k['word_id'], 'text': k['word'], 'type': 'normal'})
            else:
                data_list.append({'text': k['word'], 'type': 'normal'})
        essayList.append(data_list)
    return jsonify(essayList)


@english.route('/word_result', methods=['POST'])
def word_result():
    user_id = request.json.get('user_id')
    essay_id = request.json.get('essay_id')
    exercise_num = request.json.get('exercise_num')
    grade = request.json.get('grade')
    result = SentenceResult.query.filter_by(user_id=user_id, essay_id=essay_id, exercise_num=exercise_num,
                                            grade=grade).all()
    word_list = []
    for i in result:
        sentence = i.to_json()
        num_list = sentence['num'].split(',')
        id_list = sentence['word'].split(',')
        time_list = sentence['time'].split(',')
        sentence_info = Paragraph.query.filter_by(sen_id=sentence['sen_id'], essay_id=sentence['essay_id']).first()
        sentence_article = sentence_info.to_json()['article']
        word = split_word(sentence_article)

        sen_id = sentence['sen_id']

        for k in word:
            if 'word_id' in k:
                if k['word_id'] in id_list:
                    index = id_list.index(k['word_id'])
                    minutes, seconds = divmod(int(time_list[index]), 60)
                    word_list.append({'sen_id': sen_id, 'text': k['word'], 'num': num_list[index],
                                      'time': '{:02d}:{:02d}'.format(minutes, seconds)})
    return jsonify(word_list)


@english.route('/get_catalog', methods=['GET'])
def get_catalog():
    catalog_data = EssayCatalog.query.filter_by(pid=None).all()
    data = []
    for i in catalog_data:
        catalog_info = i.to_json()
        catalog = {'label': catalog_info['label'], 'value': catalog_info['id']}
        data.append(catalog)
    return jsonify(data)


def is_english_word(word):
    pattern = re.compile('^[a-zA-Z].*[a-zA-Z]$|^[a-zA-Z]$|^[A-Z].*[.]$')
    return bool(pattern.match(word))


def split_sentence(sentence):
    word = re.findall(r"[a-zA-Z]+|[-.,!?;:\"\'’”]", sentence)

    for index in range(len(word)):
        if index == len(word):
            break
        if word[index] == '\'' and len(word[index + 1]) <= 2 and word[index + 1].isalpha():
            word[index - 1] = word[index - 1] + word[index] + word[index + 1]
            del word[index]
            del word[index]
        if word[index] == '’' and len(word[index + 1]) <= 2 and word[index + 1].isalpha():
            word[index - 1] = word[index - 1] + word[index] + word[index + 1]
            del word[index]
            del word[index]
        if word[index] == '-':
            word[index - 1] = word[index - 1] + word[index] + word[index + 1]
            del word[index]
            del word[index]
        if re.match(r'^[a-z].*[.]$', word[index]):
            new_strings = [word[index][:-1]] + word[index][-1:].split()
            split_index = word.index(word[index])
            word[split_index:split_index + 1] = new_strings
    return word


def split_word(sentence):
    words = split_sentence(sentence)
    index = 1
    word_list = []
    for word in words:
        if is_english_word(word):
            word_list.append({'word_id': str(index), 'word': word})
            index += 1
        else:
            word_list.append({'word': word})
    return word_list
