import os

from . import auth
from flask import request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash

from ..models import User, ClassInfo, Ranking, TypeUser, EssayCatalog
from .. import db


# 登录
@auth.route('/login', methods=['POST'])
def login():
    username = request.json.get('username')
    password = request.json.get('password')

    user = User.query.filter_by(username=username).first()

    if user is None:
        return jsonify({'code': 400, 'message': '没有该用户'})
    if not check_password_hash(user.password, password):
        return jsonify({'code': 400, 'message': '密码错误'})
    if user.confirm == '1':
        return jsonify({'code': 400, 'message': '管理员还未确认'})
    return jsonify({'code': 200, 'message': '登录成功', 'user': user.to_json()})


# 注册
@auth.route('/register', methods=['POST'])
def register():
    username = request.json.get('username')
    password = request.json.get('password')
    role = request.json.get('role')
    email = request.json.get('email')
    # class_type = request.json.get('class_type')

    password = generate_password_hash(password)
    user = User.query.filter_by(username=username).first()

    if user is not None:
        return jsonify({'code': 400, 'message': '该用户名已存在'})
    else:
        if role == 'admin':
            role_info = '2'
        else:
            role_info = '1'
        user_data = User(username=username,
                         password=password,
                         email=email,
                         avatar='/assets/images/avatar.png',
                         role=role,
                         confirm=role_info)
        # class_type=','.join(class_type))

        db.session.add(user_data)
        db.session.commit()
        return jsonify({'code': 200, 'message': '注册成功'})


# 修改密码
@auth.route('/change_password', methods=['POST'])
def change_password():
    user_id = request.json.get('user_id')
    password = request.json.get('password')
    user = User.query.get(user_id)
    user.password = generate_password_hash(password)
    db.session.commit()
    return jsonify({'code': 200, 'message': '修改成功'})


# 个人信息修改
@auth.route('/user_edit', methods=['POST'])
def user_edit():
    user_id = request.json.get('user_id')
    username = request.json.get('username')
    email = request.json.get('email')
    role = request.json.get('role')

    user = User.query.get(user_id)

    if username != '':
        username_info = User.query.filter_by(username=username).first()
        if username_info is not None and user.username != username:
            return jsonify({'code': 400, 'message': '该用户名已存在'})
        elif len(username) < 3 or len(username) > 12:
            return jsonify({'code': 400, 'message': '用户名在3-12字符以内'})
        else:
            user.username = username
    else:
        return jsonify({'code': 400, 'message': '请输入用户名'})

    user.email = email
    db.session.commit()
    return jsonify({'code': 200, 'message': '修改成功'})


@auth.route('/set_avatar', methods=['POST'])
def set_avatar():
    avatar_file = request.files.get('file')
    username = request.form.get('username')
    # folder = os.path.abspath('..') + r'\dist\assets\images'
    folder = os.path.abspath('..') + r'\English_vue\public\assets\images'
    avatar_path = os.path.join(folder, username + '.png')
    avatar_file.save(avatar_path)
    user = User.query.filter_by(username=username).first()
    user.avatar = '/assets/images/' + username + '.png'
    db.session.commit()
    return jsonify({'code': 200})


@auth.route('/get_class', methods=['GET'])
def get_class():
    essay_data = ClassInfo.query.all()
    data = []
    for i in essay_data:
        data.append(i.to_json())
    return jsonify(data)


@auth.route('/get_ranking', methods=['GET'])
def get_ranking():
    essay_data = Ranking.query.all()
    data = []
    for i in essay_data:
        data.append(i.to_json())
    data.sort(key=lambda x: int(x["score"]), reverse=True)
    return jsonify(data)


@auth.route('/get_teacher_info', methods=['POST'])
def get_teacher_info():
    username = request.json.get('username')
    data = User.query.filter_by(username=username).first()
    return jsonify(data.to_json())


@auth.route('/get_type', methods=['POST'])
def get_type():
    user_id = request.json.get('user_id')
    role = request.json.get('role')
    type_data = TypeUser.query.filter_by(user_id=user_id).all()
    data = []
    for i in type_data:
        if role=='student':
            class_type = ClassInfo.query.filter_by(class_code=i.to_json()['type_id']).first()
            data.append(class_type.to_json()['class_name'])
        else:
            class_type = EssayCatalog.query.filter_by(id=i.to_json()['type_id']).first()
            data.append(class_type.to_json()['label'])
    data = ','.join(data)
    return jsonify(data)
