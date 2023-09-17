from flask import Flask
from flask_bootstrap import Bootstrap
from flask_moment import Moment
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from config import config

bootstrap = Bootstrap()
moment = Moment()
db = SQLAlchemy()

login_manager = LoginManager()
login_manager.login_view = 'auth.login'


def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(config[config_name])
    config[config_name].init_app(app)

    bootstrap.init_app(app)
    moment.init_app(app)
    db.init_app(app)

    login_manager.init_app(app)

    from .admin import admin as admin_blueprint
    app.register_blueprint(admin_blueprint, url_prefix='/admin')
    from .auth import auth as auth_blueprint
    app.register_blueprint(auth_blueprint, url_prefix='/auth')
    from .english import english as english_blueprint
    app.register_blueprint(english_blueprint, url_prefix='/english')
    from .teacher import teacher as teacher_blueprint
    app.register_blueprint(teacher_blueprint, url_prefix='/teacher')
    from .student import student as student_blueprint
    app.register_blueprint(student_blueprint, url_prefix='/student')

    return app


# sql = SQLAlchemy()


