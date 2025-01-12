module Api
  module V1
    class LinksController < ApplicationController
      before_action :find_link, only: [:show]

      def create
        @link = Link.new(link_params)
        @link.short_url = generate_short_url

        if @link.save
          render json: { short_url: @link.short_url, original_url: @link.original_url }, status: :created
        else
          render json: { errors: @link.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def show
        if @link
          # Permite redirecionar para URLs externas
          redirect_to @link.original_url, allow_other_host: true
        else
          render json: { error: "Link not found" }, status: :not_found
        end
      end

      private

      def link_params
        params.require(:link).permit(:original_url)
      end

      def generate_short_url
        SecureRandom.alphanumeric(6)
      end

      def find_link
        @link = Link.find_by(short_url: params[:short_url] || params[:id])
      end
    end
  end
end
