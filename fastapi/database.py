from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
DATABASE_URL="mysql+pymysql://root:hema%4015062007@localhost:3306/batch"
engine = create_engine(DATABASE_URL)
SessionLocal=sessionmaker(bind=engine)
def db_conn():
    db=SessionLocal()
    try:
        yield db
    finally:
        db.close()