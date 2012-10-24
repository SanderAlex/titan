# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
TitanTraid::Application.initialize!

require 'hassle'

Rails::Initializer.run do |config|

     config.middleware.use Hassle
end