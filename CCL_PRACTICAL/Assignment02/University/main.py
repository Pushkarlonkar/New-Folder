import webapp2
import os 
import json 
import urllib
from google.appengine.ext.webapp import template
class MainPage(webapp2.RequestHandler):
    def get(self):
        path = os.path.join(os.path.dirname(__file__),'index.html')
        template_values = {}
        self.response.out.write(template.render(path,template_values))
    
    def post(self):
        search = self.request.get('search')
        path = os.path.join(os.path.dirname(__file__),'result.html')
        url = "http://universities.hipolabs.com/search?name="+search
        data = urllib.urlopen(url).read();
        data = json.loads(data);
        for i in range(1,len(data)):
            template_values = {
                "country" : data[i]["country"],
                "name"  : data[i]["name"]
            }
            self.response.out.write(template.render(path,template_values))
        
app = webapp2.WSGIApplication([('/',MainPage)],debug = True)