defmodule HeaderParser.UserControllerTest do
  require Logger
  use HeaderParser.ConnCase

  test "shows language and os" do
    conn = build_conn()
      |> put_req_header("accept-language", "en-US,en;q=0.5")
      |> put_req_header("user-agent", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:51.0) Gecko/20100101 Firefox/51.0")
    conn = get(conn, "/api/whoami")
    assert json_response(conn, 200)["language"] == "en-US"
  end
end
