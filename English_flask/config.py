import os

basedir = os.path.abspath(os.path.dirname(__file__))


class Config:
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_COMMIT_TEARDOWN = True
    SQLALCHEMY_COMMIT_ON_TEARDOWN = True
    PRESERVE_CONTEXT_ON_EXCEPTION = False
    SQLALCHEMY_RECORD_QUERIES = True

    @staticmethod
    def init_app(app):
        pass


class DevelopmentConfig(Config):
    DEBUG = True
    # 数据库连接 mysql+pymysql://用户名:密码@localhost/数据库
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:980518@localhost/english'


config = {
    'development': DevelopmentConfig
}
