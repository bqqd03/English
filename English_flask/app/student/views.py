import re
import string
from datetime import *

from flask import request, jsonify

from . import student
from .. import db
from ..models import ClassInfo, Homework, Essay, HomeworkResult, HomeworkSentence, Paragraph, ParagraphDegree, TypeUser, \
    User


@student.route('/homework_list', methods=['POST'])
def homework_list():
    class_id = request.json.get('class_id')
    user_id = request.json.get('user_id')
    dataList = []
    homework_data = Homework.query.filter_by(class_id=class_id).all()
    for j in homework_data:
        item = j.to_json()
        class_name = ClassInfo.query.filter_by(class_id=item['class_id']).first()
        essay_name = Essay.query.filter_by(essay_id=item['essay_id']).first()
        item['class_name'] = class_name.to_json()['class_name']
        item['essay_name'] = essay_name.to_json()['title']

        start_date = item['start_date']
        end_date = item['end_date']
        current = datetime.now()
        currentDate = current.strftime('%Y-%m-%d')
        if currentDate < start_date:
            item['status'] = '未开始'
        elif start_date <= currentDate <= end_date:
            item['status'] = '进行中'
        else:
            item['status'] = '已结束'
        dataList.append(item)
    print(dataList)
    for j in dataList:
        result_data = HomeworkResult.query.filter_by(homework_id=j['homework_id'], stu_id=user_id).first()
        if result_data is not None:
            item = result_data.to_json()
            j['status'] = '已完成'
            j['score'] = item['score']

    return jsonify(dataList)


@student.route('/sentence_result', methods=['POST'])
def sentence_result():
    user_id = request.json.get('user_id')
    homework_id = request.json.get('homework_id')
    sen_id = request.json.get('sen_id')
    word = request.json.get('word')
    num = request.json.get('num')
    time = request.json.get('time')
    result = HomeworkSentence(stu_id=user_id,
                              homework_id=homework_id,
                              sen_id=sen_id,
                              word=word[:-1],
                              num=num[:-1],
                              time=time[:-1])
    db.session.add(result)
    db.session.commit()
    return jsonify({'code': 200})


@student.route('/homework_result', methods=['POST'])
def homework_result():
    user_id = request.json.get('user_id')
    homework_id = request.json.get('homework_id')
    score = request.json.get('score')
    time = request.json.get('time')
    now = datetime.now()
    result = HomeworkResult(stu_id=user_id,
                            homework_id=homework_id,
                            score=round(score, 0),
                            time=time,
                            current_time=now.strftime("%Y-%m-%d %H:%M:%S"))
    db.session.add(result)
    db.session.commit()
    return jsonify({'code': 200})


@student.route('/content_result', methods=['POST'])
def content_result():
    homework_id = request.json.get('homework_id')
    user_id = request.json.get('user_id')
    result = HomeworkSentence.query.filter_by(stu_id=user_id, homework_id=homework_id).all()
    essayData = Homework.query.filter_by(homework_id=homework_id).first()
    essay_id = essayData.to_json()['essay_id']
    essayList = []
    for i in result:
        sentence = i.to_json()
        num_list = sentence['num'].split(',')
        id_list = sentence['word'].split(',')

        sentence_info = Paragraph.query.filter_by(sen_id=sentence['sen_id'], essay_id=essay_id).first()
        sentence_article = sentence_info.to_json()['article']
        word_list = split_word(sentence_article)
        data_list = []

        for k in word_list:
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


@student.route('/word_result', methods=['POST'])
def word_result():
    homework_id = request.json.get('homework_id')
    user_id = request.json.get('user_id')
    result = HomeworkSentence.query.filter_by(stu_id=user_id, homework_id=homework_id).all()
    essayData = Homework.query.filter_by(homework_id=homework_id).first()
    essay_id = essayData.to_json()['essay_id']
    wordList = []
    for i in result:
        sentence = i.to_json()
        num_list = sentence['num'].split(',')
        id_list = sentence['word'].split(',')
        time_list = sentence['time'].split(',')
        sentence_info = Paragraph.query.filter_by(sen_id=sentence['sen_id'], essay_id=essay_id).first()
        sentence_article = sentence_info.to_json()['article']
        word_list = split_word(sentence_article)

        sen_id = sentence['sen_id']

        for k in word_list:
            if 'word_id' in k:
                if k['word_id'] in id_list:
                    index = id_list.index(k['word_id'])
                    minutes, seconds = divmod(int(time_list[index]), 60)
                    wordList.append({'sen_id': sen_id, 'text': k['word'], 'num': num_list[index],
                                     'time': '{:02d}:{:02d}'.format(minutes, seconds)})

    return jsonify(wordList)


@student.route('/sentence', methods=['POST'])
def sentence_get():
    homework_id = request.json.get('homework_id')
    user_id = request.json.get('user_id')
    homework = Homework.query.filter_by(homework_id=homework_id).first()
    homework_data = homework.to_json()

    english_paragraph = Paragraph.query.filter_by(essay_id=homework_data['essay_id']).all()
    data = []

    for i in english_paragraph:
        sentence = i.to_json()
        select_id = ParagraphDegree.query.filter_by(essay_id=homework_data['essay_id'], grade=homework_data['grade'],
                                                    sen_id=sentence['sen_id']).first()
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

    audio_address = Essay.query.filter_by(essay_id=homework_data['essay_id']).first()

    paragraphs = HomeworkSentence.query.filter_by(homework_id=homework_id, stu_id=user_id).all()

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
        {'audio_address': audio_address.to_json()['audio_address'], 'data': data, 'start_id': start_id,
         'correct_num': correct_num, 'all_num': all_num, 'time': time})


@student.route('/apply_class', methods=['POST'])
def apply_class():
    class_code = request.json.get('classCode')
    user_id = request.json.get('user_id')
    class_data = ClassInfo.query.filter_by(class_code=class_code).first()
    if class_data is None:
        return jsonify({'code': 400, 'message': '没有该班级码'})
    else:
        class_stu = TypeUser(type_id=class_code,
                             user_id=user_id,
                             confirm='0')
        db.session.add(class_stu)
        db.session.commit()
        return jsonify({'code': 200})


@student.route('/get_class', methods=['POST'])
def get_class():
    user_id = request.json.get('user_id')
    data = []
    student_class = TypeUser.query.filter_by(user_id=user_id, confirm='1').all()
    for i in student_class:
        class_info = ClassInfo.query.filter_by(class_code=i.to_json()['type_id']).first()
        data.append(class_info.to_json())

    return jsonify(data)


@student.route('/class_detail', methods=['POST'])
def class_detail():
    class_id = request.json.get('class_id')
    class_data = ClassInfo.query.filter_by(class_id=class_id).first()
    class_info = class_data.to_json()
    teacher_data = User.query.filter_by(username=class_info['teacher_name']).first()
    teacher_info = teacher_data.to_json()
    data = {'teacher_name': teacher_info['username'], 'teacher_avatar': teacher_info['avatar'],
            'class_name': class_info['class_name']}

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
