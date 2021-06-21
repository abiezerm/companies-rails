# Companies System

## Config


Companies system require install by following the instructions docs for install

```sh
gem install bundler -v 1.17.3
RUN bundle install
```

Copy environment and configure your credentials

```sh
cp .env.sample .env
```

Configure database and migrate
```sh
rake db:create && rake db:migrate
```

Install NPM Packages and compile
```sh
yarn install
RAILS_ENV=production rake assets:precompile
```

Execute server and enjoy
```sh
RAILS_ENV=production RAILS_SERVE_STATIC_FILES=1 rails s
```

Go to the browser and enter to link
> http://localhost:3000/
