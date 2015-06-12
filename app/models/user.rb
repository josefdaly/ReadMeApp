# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  fname           :string           not null
#  lname           :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  validates :email, :fname, :lname, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token
  attr_reader :password

  has_many(
    :library_items,
    foreign_key: :owner_id
  )
  has_many(
    :library_books,
    through: :library_items,
    source: :book
  )
  has_many(
    :written_works,
    class_name: 'Book',
    foreign_key: :author_id
  )
  has_many(
    :reviews,
    class_name: 'Review',
    foreign_key: :author_id
  )

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && user.is_password?(password)
    return nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token
    self.session_token= User.generate_session_token
    self.save
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
end
