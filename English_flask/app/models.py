from flask_login import UserMixin
from . import db, login_manager


class User(UserMixin, db.Model):
    __tablename__ = 'users'
    user_id = db.Column(db.Integer, index=True, primary_key=True)
    username = db.Column(db.String(12), nullable=False, index=True)
    password = db.Column(db.String(126), nullable=False, index=True)
    email = db.Column(db.String(26), index=True)
    avatar = db.Column(db.String(62), index=True)
    role = db.Column(db.String(10), index=True)
    confirm = db.Column(db.String(10), index=True)

    def to_json(self):
        json_data = {
            'user_id': self.user_id,
            'username': self.username,
            'email': self.email,
            'avatar': self.avatar,
            'role': self.role,
            'confirm': self.confirm
        }
        return json_data


class Paragraph(db.Model):
    __tablename__ = 'paragraphs'
    id = db.Column(db.Integer, index=True, primary_key=True)
    essay_id = db.Column(db.String(10), nullable=False, index=True)
    sen_id = db.Column(db.String(10), nullable=False, index=True)
    article = db.Column(db.String(500), nullable=False, index=True)
    translate = db.Column(db.String(500), index=True)
    audio_start = db.Column(db.String(10), index=True)
    audio_end = db.Column(db.String(10), index=True)

    def to_json(self):
        json_data = {
            'id': self.id,
            'essay_id': self.essay_id,
            'sen_id': self.sen_id,
            'article': self.article,
            'translate': self.translate,
            'audio_start': self.audio_start,
            'audio_end': self.audio_end,
        }
        return json_data


class ParagraphDegree(db.Model):
    __tablename__ = 'paragraph_degree'
    id = db.Column(db.Integer, index=True, primary_key=True)
    essay_id = db.Column(db.String(10), nullable=False, index=True)
    sen_id = db.Column(db.String(10), nullable=False, index=True)
    word_id = db.Column(db.String(225), nullable=False, index=True)
    grade = db.Column(db.String(10), index=True)

    def to_json(self):
        json_data = {
            'id': self.id,
            'essay_id': self.essay_id,
            'sen_id': self.sen_id,
            'word_id': self.word_id,
            'grade': self.grade
        }
        return json_data


class Essay(db.Model):
    __tablename__ = 'essays'
    essay_id = db.Column(db.String(62), index=True, primary_key=True)
    title = db.Column(db.String(500), index=True)
    essay_address = db.Column(db.String(500), index=True)
    audio_address = db.Column(db.String(500), index=True)
    label = db.Column(db.String(10), index=True)
    type = db.Column(db.String(20), index=True)

    def to_json(self):
        json_data = {
            'essay_id': self.essay_id,
            'title': self.title,
            'essay_address': self.essay_address,
            'audio_address': self.audio_address,
            'label': self.label,
            'type': self.type
        }
        return json_data


class EssayCatalog(db.Model):
    __tablename__ = 'essay_catalogs'
    id = db.Column(db.String(64), primary_key=True)
    label = db.Column(db.String(500), index=True)
    pid = db.Column(db.String(64), index=True)
    isEdit = db.Column(db.String(5), index=True)

    def to_json(self):
        json_data = {
            'id': self.id,
            'label': self.label,
            'pid': self.pid,
            'isEdit': int(self.isEdit)
        }
        return json_data


class SentenceResult(db.Model):
    __tablename__ = 'sentence_result'
    id = db.Column(db.Integer, index=True, primary_key=True)
    user_id = db.Column(db.String(10), nullable=False, index=True)
    essay_id = db.Column(db.String(10), nullable=False, index=True)
    grade = db.Column(db.String(10), index=True)
    sen_id = db.Column(db.String(10), nullable=False, index=True)
    word = db.Column(db.String(62), index=True)
    num = db.Column(db.String(62), index=True)
    time = db.Column(db.String(60), index=True)
    exercise_num = db.Column(db.String(10), nullable=False, index=True)

    def to_json(self):
        json_data = {
            'id': self.id,
            'user_id': self.user_id,
            'essay_id': self.essay_id,
            'grade': self.grade,
            'sen_id': self.sen_id,
            'word': self.word,
            'num': self.num,
            'time': self.time,
            'exercise_num': self.exercise_num
        }
        return json_data


class EssayResult(db.Model):
    __tablename__ = 'essay_result'
    id = db.Column(db.Integer, index=True, primary_key=True)
    user_id = db.Column(db.String(10), nullable=False, index=True)
    essay_id = db.Column(db.String(10), nullable=False, index=True)
    grade = db.Column(db.String(10), index=True)
    score = db.Column(db.String(20), nullable=False, index=True)
    time = db.Column(db.String(20), index=True)
    current_time = db.Column(db.DateTime, index=True)
    exercise_num = db.Column(db.String(10), nullable=False, index=True)

    def to_json(self):
        json_data = {
            'id': self.id,
            'user_id': self.user_id,
            'essay_id': self.essay_id,
            'grade': self.grade,
            'score': self.score,
            'time': self.time,
            'current_time': self.current_time,
            'exercise_num': self.exercise_num
        }
        return json_data


class ClassInfo(db.Model):
    __tablename__ = 'class_info'
    class_id = db.Column(db.Integer, index=True, primary_key=True)
    teacher_name = db.Column(db.String(10), nullable=False, index=True)
    class_name = db.Column(db.String(10), nullable=False, index=True)
    class_code = db.Column(db.String(10), nullable=False, index=True)

    def to_json(self):
        json_data = {
            'class_id': self.class_id,
            'teacher_name': self.teacher_name,
            'class_name': self.class_name,
            'class_code': self.class_code
        }
        return json_data


class TypeUser(db.Model):
    __tablename__ = 'type_user'
    id = db.Column(db.Integer, index=True, primary_key=True)
    type_id = db.Column(db.String(10), nullable=False, index=True)
    user_id = db.Column(db.String(10), nullable=False, index=True)
    confirm = db.Column(db.String(10), nullable=False, index=True)

    def to_json(self):
        json_data = {
            'id': self.id,
            'type_id': self.type_id,
            'user_id': self.user_id,
            'confirm': self.confirm
        }
        return json_data


class Homework(db.Model):
    __tablename__ = 'homework'
    homework_id = db.Column(db.Integer, index=True, primary_key=True)
    homework_name = db.Column(db.String(10), nullable=False, index=True)
    essay_id = db.Column(db.String(10), nullable=False, index=True)
    grade = db.Column(db.String(10), nullable=False, index=True)
    homework_type = db.Column(db.String(10), nullable=False, index=True)
    class_id = db.Column(db.String(10), nullable=False, index=True)
    start_date = db.Column(db.DateTime, nullable=False, index=True)
    end_date = db.Column(db.DateTime, nullable=False, index=True)

    def to_json(self):
        json_data = {
            'homework_id': self.homework_id,
            'homework_name': self.homework_name,
            'essay_id': self.essay_id,
            'grade': self.grade,
            'homework_type': self.homework_type,
            'class_id': self.class_id,
            'start_date': self.start_date,
            'end_date': self.end_date
        }
        return json_data


class HomeworkResult(db.Model):
    __tablename__ = 'homework_result'
    id = db.Column(db.Integer, index=True, primary_key=True)
    homework_id = db.Column(db.String(10), nullable=False, index=True)
    stu_id = db.Column(db.String(10), nullable=False, index=True)
    time = db.Column(db.String(10), nullable=False, index=True)
    score = db.Column(db.String(10), nullable=False, index=True)
    current_time = db.Column(db.DateTime, index=True)

    def to_json(self):
        json_data = {
            'id': self.id,
            'homework_id': self.homework_id,
            'stu_id': self.stu_id,
            'time': self.time,
            'score': self.score,
            'current_time': self.current_time
        }
        return json_data


class HomeworkSentence(db.Model):
    __tablename__ = 'homework_sentence'
    id = db.Column(db.Integer, index=True, primary_key=True)
    stu_id = db.Column(db.String(10), nullable=False, index=True)
    homework_id = db.Column(db.String(10), nullable=False, index=True)
    sen_id = db.Column(db.String(10), nullable=False, index=True)
    word = db.Column(db.String(62), index=True)
    num = db.Column(db.String(62), index=True)
    time = db.Column(db.String(60), index=True)

    def to_json(self):
        json_data = {
            'id': self.id,
            'stu_id': self.stu_id,
            'homework_id': self.homework_id,
            'sen_id': self.sen_id,
            'word': self.word,
            'num': self.num,
            'time': self.time
        }
        return json_data


class Ranking(db.Model):
    __tablename__ = 'ranking'
    id = db.Column(db.Integer, index=True, primary_key=True)
    user_name = db.Column(db.String(10), nullable=False, index=True)
    essay_num = db.Column(db.String(10), nullable=False, index=True)
    score = db.Column(db.String(10), nullable=False, index=True)

    def to_json(self):
        json_data = {
            'id': self.id,
            'user_name': self.user_name,
            'essay_num': self.essay_num,
            'score': self.score
        }
        return json_data


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))
