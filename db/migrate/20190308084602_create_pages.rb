class CreatePages < ActiveRecord::Migration[5.2]
  def change
    create_table :pages do |t|
      t.string :title, null: false
      t.string :author, null: false
      t.text :body, null: false

      t.timestamps
    end
    add_index :pages, [:created_at]
  end
end
