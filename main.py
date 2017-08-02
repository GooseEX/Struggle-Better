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
from google.appengine.ext import ndb


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
        self.response.write(template.render())

class StressHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('templates/stress.html')
        self.response.write(template.render())

class NutritionHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('templates/nutrition.html')
        self.response.write(template.render())

class TimeHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('templates/time.html')
        self.response.write(template.render())

class BudgetHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('templates/budget.html')
        self.response.write(template.render())

class FeedbackHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('templates/feedback.html')
        self.response.write(template.render())

app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/main.html', MainHandler),
    ('/stress.html', StressHandler),
    ('/nutrition.html', NutritionHandler),
    ('/time.html', TimeHandler),
    ('/budget.html', BudgetHandler),
    ('/feedback.html', FeedbackHandler)
], debug=True)
