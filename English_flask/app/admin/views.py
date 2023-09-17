from . import admin
from flask import request, jsonify
from werkzeug.security import generate_password_hash

from ..models import User, EssayResult, SentenceResult, TypeUser
from .. import db


# 获取用户信息
@admin.route('/user_get', methods=['POST'])
def user_get():
    role = request.json.get('role')

    if role == 'all':
        user = User.query.all()
    else:
        user = User.query.filter(User.role == role).all()
    data = []
    for i in user:
        user_data = i.to_json()
        user_type = []
        if user_data['role'] == 'teacher':
            type_data = TypeUser.query.filter_by(user_id=user_data['user_id']).all()
            for j in type_data:
                user_type.append(j.to_json()['type_id'])
            user_data['catalog'] = user_type
        data.append(user_data)
    return jsonify(data)


# 用户确认
@admin.route('/user_confirm', methods=['POST'])
def user_confirm():
    user_id = request.json.get('user_id')
    confirm = request.json.get('confirm')
    user = User.query.filter_by(user_id=user_id).first()
    user.confirm = confirm
    db.session.commit()
    return jsonify({'code': 200})


# 添加用户
@admin.route('/user_add', methods=['POST'])
def user_add():
    username = request.form.get('username')
    password = '123456'
    email = request.form.get('email')
    role = request.form.get('role')
    catalog = request.form.get('catalog')
    if username == '':
        return jsonify({'code': 400, 'message': '请输入用户名'})
    elif role == '':
        return jsonify({'code': 400, 'message': '请选择用户角色'})

    password = generate_password_hash(password)
    user = User.query.filter_by(username=username).first()

    if user is not None:
        return jsonify({'code': 400, 'message': '该用户名已存在'})
    else:
        if role == 'admin':
            role_info = '2'
        else:
            role_info = '1'
        user_info = User(username=username,
                         password=password,
                         email=email,
                         avatar='/assets/images/avatar.png',
                         role=role,
                         confirm=role_info)
        db.session.add(user_info)
        db.session.commit()
    if catalog != '':
        catalog = catalog.split(',')
        user_data = User.query.filter_by(username=username).first()
        for i in catalog:
            type_info = TypeUser(type_id=i, user_id=user_data.to_json()['user_id'], confirm='1')
            db.session.add(type_info)
            db.session.commit()
    return jsonify({'code': 200, 'message': '添加成功'})


# 用户信息修改
@admin.route('/user_edit', methods=['POST'])
def user_edit():
    user_id = request.form.get('user_id')
    username = request.form.get('username')
    email = request.form.get('email')
    role = request.form.get('role')
    catalog = request.form.get('catalog')

    user = User.query.get(user_id)

    if username != '':
        username_info = User.query.filter_by(username=username).first()
        if username_info is not None and user.username != username:
            return jsonify({'code': 400, 'message': '该用户名已存在'})
        else:
            user.username = username
    else:
        return jsonify({'code': 400, 'message': '请输入用户名'})

    user.email = email
    if role != '':
        user.role = role
    else:
        return jsonify({'code': 400, 'message': '请选择角色'})
    if role == 'teacher':
        catalog = catalog.split(',')
        catalog_data = TypeUser.query.filter_by(user_id=user_id).all()
        for i in catalog_data:
            catalog_info = i.to_json()
            if catalog_info['type_id'] not in catalog:
                db.session.delete(i)

        for i in catalog:
            catalog_data = TypeUser.query.filter_by(type_id=i,user_id=user_id).first()
            if catalog_data is None:
                type_info = TypeUser(type_id=i, user_id=user_id, confirm='1')
                db.session.add(type_info)
                db.session.commit()
    db.session.commit()
    return jsonify({'code': 200, 'message': '修改成功'})


# 用户删除
@admin.route('/user_delete', methods=['POST'])
def user_delete():
    user_id = request.form.get('user_id')
    user = User.query.get(user_id)
    db.session.delete(user)

    essay_result = EssayResult.query.filter_by(user_id=user_id).all()
    if len(essay_result) != 0:
        for i in essay_result:
            db.session.delete(i)

    sentence_result = SentenceResult.query.filter_by(user_id=user_id).all()
    if len(sentence_result) != 0:
        for j in sentence_result:
            db.session.delete(j)
    db.session.commit()

    return jsonify({'code': 200, 'message': '删除成功'})
