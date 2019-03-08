class Page < ApplicationRecord
  has_many :highlights

  validates :title, presence: true, length: { maximum: 250 }
  validates :body, presence: true
  validates :author, presence: true, length: { maximum: 250 }
end
