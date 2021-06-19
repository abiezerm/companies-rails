require('faker')
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# 10.times do
# Clients::Client.create(
# first_name: Faker::Name.first_name,
#     last_name: Faker::Name.last_name,
#     phone: Faker::PhoneNumber.phone_number,
#     email: Faker::Internet.email,
#     title: Faker::Job.title
#   )
# end

status = %w[ACTIVE INACTIVE].shuffle

50.times do
  Companies::Company.create(
    name: Faker::Company.name,
    status: status.first,
    phone: Faker::PhoneNumber.phone_number
  )
end
