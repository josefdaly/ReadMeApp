Rails.application.routes.draw do
  root to: 'static_pages#root'
  resources :users, only: [:new, :create, :show, :index] do
    get "featured", on: :collection
  end

  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :reviews, only: [:create, :show]
    resources :books, except: [:new, :edit, :update] do
      get "search", on: :collection
      get "recent", on: :collection
      get "featured", on: :collection
    end
    resources :subjects, only: [:create, :show, :index]
    resources :book_subjects, only: [:create, :destroy]
    resources :library_items, only: [:create, :show, :destroy]
    resource :current_user, only: [:show]
  end
end
