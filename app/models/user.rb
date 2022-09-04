class User < ApplicationRecord
    has_secure_password
    belongs_to :organization, default: nil
    validates :email_address, format: { with: URI::MailTo::EMAIL_REGEXP }, presence: true, uniqueness: true
    validates :password, presence: true, :length => {:within => 6..40}
    validates :first_name, presence: true
    validates :last_name, presence: true
    
end
