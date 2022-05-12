import webapp2;
import urllib;
import json ;
import os;

class MainPage(webapp2.RequestHandler): 
    def get(self):
        # we need to render the initial page over here 
        templateValues = {}
        path = os.path.join(os.path.dirname(__file__),'index.html');
        self.response.out.write(['/',templateValues],debug = True)

    def post(self):
        lon = self.request.get('long')
        lat = self.request.get('lat')
        hourly = self.request.get('hourly')

        url = "https://api.open-meteo.com/v1/forecast?latitude="+lat+"&longitude="+lon+"&hourly="+hourly
        data = urllib.urlopen(url).read()
        data = json.loads(data)
        # got the data in the json format 
        # now we need to fetch the data from the URL 