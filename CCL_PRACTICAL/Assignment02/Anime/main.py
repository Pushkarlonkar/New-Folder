# import webapp2
# import os
# import urllib
# import json
# from google.appengine.ext.webapp import template


# class MainPage(webapp2.RequestHandler):
#     def get(self):
#         path = os.path.join(os.path.dirname(__file__),'index.html')
#         # url = "https://ghibliapi.herokuapp.com/films";
#         # data = urllib.urlopen(url).read();
#         # data = json.loads(data);
#         # title = [];
#         # img = [];
#         # director = [];

#         # for i in range(0,10):
#         #     title.append(data[i].title);
#         #     img.append(data[i].img);
#         #     director.append(data[i].director);

#         # templateValues = {
#         #     "title" : title,
#         #     "img" : img,
#         #     "director" : director,
#         # }
#         templateValues = {
#             "title" : "hell",
#             "img" : "esdfa",
#             "director" : "adfa",
#         }
#         # now we have got the 
#         self.response.out.write(template.render(path,templateValues))

# app = webapp2.WSGIApplication([('/',MainPage)], debug = True)


import os
import json
import urllib
import webapp2
from google.appengine.ext.webapp import template

class MainPage(webapp2.RequestHandler):
    def get(self):
        path = os.path.join(os.path.dirname(__file__), 'index.html')
        url = "https://ghibliapi.herokuapp.com/films"
        dt = urllib.urlopen(url).read();
        data = json.loads(dt);
        title = [];
        img = [];
        director = [];
        for i in range(1,10):
            # title.append(data[i]['title']);
            # img.append(data[i]['image']);
            # director.append(data[i]['director']);
            template_values = {
                "title" : data[i]['title'],
                "image" : data[i]['image'],
                "director" : data[i]['director'],
            }
            self.response.out.write(template.render(path, template_values))
        

app = webapp2.WSGIApplication([('/', MainPage)], debug=True)
