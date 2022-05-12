
# import webapp2

# # create a class called MainPage
# class MainPage(webapp2.RequestHandler):

#     # define a function that will return a response 
#     def get(self):
#             self.response.write("Hello Word\n");
        
     
#     # WSGI tells that if a particular application recieves 
#     # a request at a given route that particular route
#     # needs to fetch the data from this particular class

# app = webapp2.WSGIApplication([('/',MainPage)],debug = True);   
#     # takes two parameters the route(the address at which it will render) and the class and debug = True tells us about the error

# print("hello world")
print ('Content-Type:text/plain')
print ('')

#Hello world 


for i in range(0,5):
    print("\nPushkar  |  T190058624  |  IT Department \n")

x = 5
print('The Multiplication table of {}'.format(x))
for i in range(1,11):
    print('{} x {} = {} '.format(x,i,x*i))


print('\nThe Fibonacci Series uptil 8 is')
n1 = 0 
n2 = 1
c = 8
i = 0
while i<c:
    print(n1)
    temp = n1+n2
    n1 = n2
    n2 = temp
    i = i+1