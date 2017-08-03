#!/usr/bin/env python
#
# -*- coding: utf-8 -*-
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import datetime
import webapp2
import os
import jinja2
import logging
from google.appengine.ext import ndb
from google.appengine.api import users



class Blog(ndb.Model):
    name = ndb.StringProperty()
    title = ndb.StringProperty()
    text = ndb.StringProperty()
    created = ndb.DateTimeProperty()

jinja_environment = jinja2.Environment(loader=
    jinja2.FileSystemLoader(os.path.dirname(__file__)))

class MainHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('templates/main.html')
        user = users.get_current_user()
        if user:
            template_vars={
                'log': users.create_logout_url('/main.html'),
                'text': 'SIGN OUT'
            }
        else:
            template_vars={
                'log': users.create_login_url('/main.html'),
                'text': 'SIGN IN'
            }
        self.response.write(template.render(template_vars))


class StressHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('templates/stress.html')
        user = users.get_current_user()
        if user:
            template_vars={
                'log': users.create_logout_url('/stress.html'),
                'text': 'SIGN OUT'
            }
        else:
            template_vars={
                'log': users.create_login_url('/stress.html'),
                'text': 'SIGN IN'
            }
        self.response.write(template.render(template_vars))

class NutritionHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('templates/nutrition.html')
        user = users.get_current_user()
        if user:
            template_vars={
                'log': users.create_logout_url('/nutrition.html'),
                'text': 'SIGN OUT'
            }
        else:
            template_vars={
                'log': users.create_login_url('/nutrition.html'),
                'text': 'SIGN IN'
            }
        self.response.write(template.render(template_vars))

class TimeHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('templates/time.html')
        user = users.get_current_user()
        if user:
            template_vars={
                'log': users.create_logout_url('/time.html'),
                'text': 'SIGN OUT'
            }
        else:
            template_vars={
                'log': users.create_login_url('/time.html'),
                'text': 'SIGN IN'
            }
        self.response.write(template.render(template_vars))

class BudgetHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('templates/budget.html')
        user = users.get_current_user()
        if user:
            template_vars={
                'log': users.create_logout_url('/budget.html'),
                'text': 'SIGN OUT'
            }
        else:
            template_vars={
                'log': users.create_login_url('/budget.html'),
                'text': 'SIGN IN'
            }
        self.response.write(template.render(template_vars))

class Feedback(ndb.Model):
    name = ndb.StringProperty()
    email = ndb.StringProperty()
    tab_rate = ndb.IntegerProperty()
    feedback = ndb.StringProperty()

class FeedbackHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('templates/feedback.html')
        user = users.get_current_user()
        if user:
            template_vars={
                'log': users.create_logout_url('/feedback.html'),
                'text': 'SIGN OUT'
            }
        else:
            template_vars={
                'log': users.create_login_url('/feedback.html'),
                'text': 'SIGN IN'
            }
        self.response.write(template.render(template_vars))

    def post(self):
        logging.info('post start')
        name = self.request.get('name')
        email = self.request.get('email')
        tab_rating  = int(self.request.get('tab'))
        feedback = self.request.get('comment')

        feedback_result = Feedback(name = name, email = email, tab_rate = tab_rating, feedback = feedback)
        feedback_result.put()
        logging.info('store data')

class BlogHandler(webapp2.RequestHandler):
    def get(self):
        query = Blog.query()
        blogs = query.fetch()
        user = users.get_current_user()
        if user:
            template_vars={
                'log': users.create_logout_url('/blog.html'),
                'text': 'SIGN OUT',
                'blogs': blogs,
            }
        else:
            template_vars={
                'log': users.create_login_url('/blog.html'),
                'text': 'SIGN IN',
                'blogs': blogs,
            }
        template = jinja_environment.get_template('templates/blog.html')
        self.response.write(template.render(template_vars))

    def post(self):
        # TODO: Fill in and fix this function! Make sure to save the artist to the database.
        name = self.request.get('name')
        title=  self.request.get('title')
        text= self.request.get('text')

        me = Blog(name = name, title = title, text = text, created = datetime.datetime.now())
        my_key = me.put()
        query = Blog.query()
        blogs = query.fetch()
        blogs.append(me)
            ########b.key.delete() #remove all keys
        template_vars = {
                         'blogs': blogs,
                        }
        template = jinja_environment.get_template('templates/blog.html')
        self.response.out.write(template.render(template_vars))
#
# class SigninHandler(webapp2.RequestHandler):
#     def get(self):
#         user = users.get_current_user()
#         if user:
#             nickname = user.nickname()
#             logout_url = users.create_logout_url('/main.html')
#             greeting = 'Welcome, {}! (<a href="{}">sign out</a>)'.format(
#                 nickname, logout_url)
#         else:
#             login_url = users.create_login_url('/main.html')
#             greeting = '<a href="{}">Sign in</a>'.format(login_url)
#
#         self.response.write(
#             '<html><body>{}</body></html>'.format(greeting))

class AdminPage(webapp2.RequestHandler):
    def get(self):
        user = users.get_current_user()
        if user:
            if users.is_current_user_admin():
                self.response.write('You are an administrator.')
            else:
                self.response.write('You are not an administrator.')
        else:
            self.response.write('You are not logged in.')

app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/main.html', MainHandler),
    ('/stress.html', StressHandler),
    ('/nutrition.html', NutritionHandler),
    ('/time.html', TimeHandler),
    ('/budget.html', BudgetHandler),
    ('/blog.html', BlogHandler),
    ('/feedback.html', FeedbackHandler),
    ('/admin', AdminPage)
], debug=True)
