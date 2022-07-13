require "sinatra"
require "sinatra/reloader" if development?
require "sinatra/json"
require "json"
require "httparty"

set :bind, '0.0.0.0'  # bind to all interfaces
set :public_folder, File.join(File.dirname(__FILE__), "public")
set :views, File.dirname(__FILE__) + "/views"


response = HTTParty.get("https://api.nasa.gov/planetary/apod?api_key=HxDYIf5JHooKSuhxQzAWOpCbgcypK18XZICBcnI3")
data = JSON.parse(response&.body || "{}")

get "/" do
  redirect "/home"
end

get "/home" do
  erb :home
end

get "/api/nasa" do
  json data
end

get "*" do
  erb :home
end
