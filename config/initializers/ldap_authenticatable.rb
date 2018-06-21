require 'net/ldap'
require 'devise/strategies/authenticatable'

module Devise
  module Strategies
    class LdapAuthenticatable < Authenticatable
      def authenticate!
        if params[:user]
          ldap = Net::LDAP.new(ldap_args)
          if ldap.bind
            user = User.find_or_create_by(username: username)
            success!(user)
          else
            return fail(:invalid_login)
          end
        end
      end

      def username_ldap
        "uid=" + username + ",ou=People,dc=poietis,dc=com"
      end

      def ldap_args
        {
          host: 'skincorp01.poietis.com',
          port: 389,
          # encryption: {
          #   method: :start_tls
          # },
          auth: {
            username: username_ldap,
            password: password,
            method: :start_tls
          }
        }
      end

      def username
        params[:user][:username]
      end

      def password
        params[:user][:password]
      end

    end
  end
end

Warden::Strategies.add(:ldap_authenticatable, Devise::Strategies::LdapAuthenticatable)
