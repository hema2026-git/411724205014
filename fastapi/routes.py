from fastapi import APIRouter
router = APIRouter()

@router.get("/users")
def get_data():
    return "Get Data"

@router.post("/users/post")
def post_data(id):
    return "post data " + id

@router.put("/users/put")
def put_data(name,age):
    return f"Put Data : {name} {age}"

@router.patch("/users/patch")
def patch_data(name):
    return "Patch data " + name
    
@router.delete("/users")
def delete_data():
    return "Delete Data"