import ApiSwift
import Foundation

let client = APIClient(baseURL: URL(string: "https://example.com/api")!)
let request = APIRequest(method: .get, path: "v1/health")
print("\(request.method.rawValue) \(client.url(for: request).absoluteString)")
