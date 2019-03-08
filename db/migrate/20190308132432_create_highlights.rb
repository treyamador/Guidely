class CreateHighlights < ActiveRecord::Migration[5.2]
  def change
    create_table :highlights do |t|
      t.integer :start
      t.integer :end
      t.string :color
      t.references :page, foreign_key: true

      t.timestamps
    end
    add_index :highlights, [:page_id]
  end
end
