#from aleph_alpha_client import Client
import sys
import json



if __name__ == "__main__":

    #client = Client(
    #    token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyMDMzNiwidG9rZW5faWQiOjM5MDZ9.yLAWL-PK-j9Hh6qxyXp9f_61HJInX3vbgZgzQSTjOyE")

    #sentence = sys.argv[1]

    data = {
        "question": "Hello World"
    }

    json_data = json.dumps(data)
    print(json_data)
