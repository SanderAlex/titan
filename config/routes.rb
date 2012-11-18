TitanTraid::Application.routes.draw do
  get "ajax/refpt0"
  get "ajax/refpt2"
  get "ajax/refpt3"
  get "ajax/refpt4"
  get "ajax/refpt5"
  get "ajax/refpt"
  get "ajax/refpt1"

  resources :pages
  resources :products
  resources :ajax
  root :to => 'pages#about'

  match '/about', :to => 'pages#about'
  match '/sert', :to => 'pages#sert'
  match '/payment', :to => 'pages#payment'
  match '/contact', :to => 'pages#contact'
  match '/map', :to => 'pages#map'
  match '/lic', :to => 'pages#lic'
  match '/back', :to => 'pages#back'
  match '/dop', :to => 'pages#dop'
  match '/faq', :to => 'pages#faq'

  match '/admin', :to => 'products#index'
  match '/new', :to => 'products#new'
  match '/edit', :to => 'products#edit'

  match '/search', :to => 'products#search'

  match "/products/:id" => "products#show"

  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => 'welcome#index'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id))(.:format)'
end
