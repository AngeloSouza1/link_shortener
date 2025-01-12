require 'rails_helper'

RSpec.describe Api::V1::LinksController, type: :controller do
  describe 'POST #create' do
    it 'creates a new link and returns JSON' do
      post :create, params: { link: { original_url: 'https://example.com' } }, as: :json

      expect(response).to have_http_status(:created)
      json_response = JSON.parse(response.body)

      expect(json_response['short_url']).not_to be_nil
      expect(json_response['original_url']).to eq('https://example.com')
    end
  end
end
