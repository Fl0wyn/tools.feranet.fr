import { toolsConfig } from "@/config/tools";

export default function Md() {
  return (
    <div className="absolute top-0 w-full h-full z-50 bg-background">
      {toolsConfig.map((link) => (
        <div key={link.title}>
          #### {link.title}
          <table>
            <thead>
              <tr>
                <th>|Name</th>
                <th>|URL|</th>
              </tr>
              <tr>
                <th>|---</th>
                <th>|---|</th>
              </tr>
            </thead>
            <tbody>
              {link.rows.map((row) => (
                <tr key={row.title}>
                  <td>
                    <pre className="absolute">
                      |{`<img src="public`}
                      {row.icon}
                      {`" width="11" />`} {row.title}
                    </pre>
                  </td>
                  <td>
                    <a href={row.href} target="_blank" rel="noreferrer">
                      |{row.href}|
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
