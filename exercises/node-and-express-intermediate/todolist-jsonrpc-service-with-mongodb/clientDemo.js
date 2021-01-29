import fetch from "node-fetch";

// the below code can also be pasted into a browser console

class JsonRpcHttpClient {
  constructor(endpoint) {
    this.endpoint = endpoint;
    this.lastId = 0;
  }
  async request(method, params = undefined) {
    const body = { jsonrpc: "2.0", method: method };
    body.params = params;
    this.lastId++;
    const httpRes = await fetch(this.endpoint, {
      method: "post",
      body: JSON.stringify({
        jsonrpc: "2.0",
        method: method,
        params: params,
        id: this.lastId,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const res = await httpRes.json();
    if (res.error) {
      throw new Error(res.error);
    }
    return res.result;
  }
}

async function demo() {
  const todosClient = new JsonRpcHttpClient("https://karuga-playground.herokuapp.com/");
  await todosClient.request("delete_all_todos");
  console.log("Deleted all existing todos");
  await todosClient.request("load_todos_from_jsonplaceholder");
  console.log("Loaded todos from jsonplaceholder");
  await todosClient.request("add_todo", { title: "learn json-rpc" });
  console.log("Added new todo: 'learn json-rpc'");
}
demo();
