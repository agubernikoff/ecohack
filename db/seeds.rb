# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

 puts "creating organizations.."
 10.times do
     Organization.create(company_name: Faker::Company.bs, points: Faker::Number.between(from: 1, to: 75)  )
 end

 puts "Creating users..."
 200.times do
     User.create(email: Faker::Internet.email, password: Faker::Internet.password, first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, organization_id: Faker::Number.between(from: 1, to: 10), points: Faker::Number.between(from: 1, to: 75))
 end