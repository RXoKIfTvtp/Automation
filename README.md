# AutomationW

Performs automated actions for a user using the Microsoft [Playwright](https://playwright.dev/java/) library.

This program:
<ol>
	<li>Navigates to the website.</li>
	<li>Logs into an account with a specified username and password.</li>
	<li>Selects the specified server.</li>
	<li>Injects arbitrary JavaScript from a file.</li>
</ol>

It's possible to run this program in the background regularly using crontab.

## Arguments

| Syntax | Description |
| --- | ----------- |
| -h | (Optional) Run in headless mode |
| -w | (Required) The name of the server to log into |
| -u | (Required) The username to use |
| -p | (Required) The password for the username |
| -url | (Required) The URL of the server |
| -s | (Optional) Take a screenshot and save it to the desktop after loading completion. |
| -ua | (Optional) Overrides the user-agent with the specified value |

## Example Compilation Command

javac -cp ".:lib/*" -d bin ./src/*.java

## Example Run Command

java -cp ./bin:./lib/* AutomationW -h -w "Name" -u "Username" -p "Password" -url "https://region.example.net" "./script/main.js"

