Rails.application.routes.draw do
  root to: 'static_pages#root'
  resources :users, only: [:new, :create, :show]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :books, except: [:new, :edit, :update]
    resources :subjects, only: [:create, :show, :index]
    resources :book_subjects, only: [:create, :destroy]
    resources :library_items, only: [:create, :destroy]
    resource :current_user, only: [:show]
  end
end
