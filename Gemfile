source "https://rubygems.org"

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "rails", "~> 7.2.2", ">= 7.2.2.1"
# Use sqlite3 as the database for Active Record
# gem "sqlite3", "~> 1.4"
# Use the Puma web server [https://github.com/puma/puma]
gem "puma", ">= 6.0"
# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[ windows jruby ]
# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", require: false

group :development, :test do
  # Debugging tools
  gem "debug", platforms: %i[ mri windows ], require: "debug/prelude"
  
  # RSpec for testing
  gem "rspec-rails", "~> 5.1.2"
  
  # Factory Bot for fixtures
  gem "factory_bot_rails", "~> 6.2"
  
  # Database cleaner for test database management
  gem "database_cleaner-active_record", "~> 2.0"
  
  # Brakeman for security analysis
  gem "brakeman", require: false
  
  # RuboCop for code linting
  gem "rubocop-rails-omakase", require: false
end

group :test do
  # Fake data generation for testing
  gem "faker", "~> 3.2"
  
  # SimpleCov for test coverage reports
  gem "simplecov", require: false
end

group :development do
  # Annotate models and routes
  gem "annotate", "~> 3.2"
end

# Uncomment and use as needed:
# gem "redis", ">= 4.0.1" # Redis for caching and Action Cable
# gem "rack-cors" # CORS middleware for API development
# gem "bcrypt", "~> 3.1.7" # For has_secure_password

gem 'pg', '>= 1.1', '< 2.0'
gem 'dotenv-rails', groups: [:development, :test, :production]
