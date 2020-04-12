Rails.application.routes.draw do
  devise_for :users
  namespace :v1, defaults: {format: 'json'} do
    get 'workshops', to: 'workshops#index'
  end 
  PagesController.action_methods.each do |action|
    get "/#{action}", to: "pages##{action}", as: "#{action}_page"
  end
  #Foward All request to PagesController#index but request
  #must be non Ajax (!req.xhr?) and html mime type  
  get '*page',  to: 'pages#index', constrains: ->(req) do
    !req.xhr? && req.format.html?
  end
  #Forward root  to PagesController#Home
  root to: 'pages#index'
end
