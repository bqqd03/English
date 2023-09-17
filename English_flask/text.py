import re

import docx2txt
import nltk
import string

text = docx2txt.process(r'E:\英语练习资源\英语辩论手册\1. It’s high time men ceased to regard women as second-class citizens.docx')
sentences = nltk.sent_tokenize(text)
new_sentences = []
sub_sentence = ""
# for sentence in sentences:
#     words = sentence.split()
#     if len(words) > 40:
#         print(sentence)

for sentence in sentences:
    words = sentence.split()
    if len(words) < 40:
        sub_word = sub_sentence.split()
        if len(sub_word) + len(words) > 40:
            new_sentences.append(sub_sentence.strip())
            sub_sentence = sentence
        else:
            sub_sentence = sub_sentence + " " + sentence
    else:
        if len(sub_sentence) != 0:
            new_sentences.append(sub_sentence.strip())
            sub_sentence = ""
        new_sentences.append(sentence.strip())

if sub_sentence != "":
    new_sentences.append(sub_sentence.strip())

select_id = []
for sentence in new_sentences:
    print(sentence)
    words = sentence.split()
    index = 1
    temp = []

    temp_id = []
    temp_word = []
    pattern = re.compile('^[a-zA-Z].*[a-zA-Z]$|^[a-zA-Z]$|^[A-Z].*[.]$')
    punctuation_string = string.punctuation
    # 删掉标点符号
    for word in range(len(words)):
        for j in punctuation_string:
            words[word] = words[word].replace(j, '').lower()
    word_list = [word for word in words if any(char.isalpha() for char in word)]
    for word in words:
        if pattern.match(word):
            temp.append({'id': index, 'word': word})
            index += 1

    group_size = 7
    num_groups = len(temp) // group_size  # 计算组的数量

    if len(temp) % group_size != 0:
        num_groups += 1
    for j in range(num_groups):
        start_index = j * group_size
        end_index = start_index + group_size
        group = temp[start_index:end_index]

        # longest_element = max(group, key=lambda x: len(x["word"]))
        # temp_id.append(str(longest_element['id']))
        max_num = 0
        max_word = ''
        max_index = ''
        for k in group:
            if len(k['word']) > max_num:
                if k['word'] not in temp_word:
                    max_num = len(k['word'])
                    max_word = k['word']
                    max_index = str(k['id'])
        temp_id.append(max_index)
        temp_word.append(max_word)

        print(group)
    print(temp_id)
    print('=========')

    id_str = ','.join(temp_id)
    select_id.append(id_str)

print(select_id)
