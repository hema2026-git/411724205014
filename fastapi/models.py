from sqlalchemy import Integer, String, Column
from sqlalchemy.orm import declarative_base
Base = declarative_base()
class user(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    name = Column(String(100))