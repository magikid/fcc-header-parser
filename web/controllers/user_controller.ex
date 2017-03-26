defmodule HeaderParser.UserController do
  require Logger
  use HeaderParser.Web, :controller

  def index(conn, _params) do
    ua = hd get_req_header(conn, "user-agent")
    lang = hd String.split((hd get_req_header(conn, "accept-language")), ",")
    os = String.trim(hd tl tl String.split(ua, ";"))
    ip = conn.remote_ip |> Tuple.to_list |> Enum.join(".")
    json conn, %{ipaddress: ip, language: lang, software: os}
  end
end
