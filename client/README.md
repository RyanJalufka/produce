## Folder Structure
```
assets/
  logo.svg
components/
pages/
hooks/
redux/
utils/
index.js
```
- Assets: non public assets used by our app
- Components: all react components with a folder for each feature and js file for each view
- Hooks: for creating custom react hooks
- Redux: for using the react context api (or Context - whatever we choose)
- Utils: for any non react helper functions or modules

## React Overview
- With the addition of hooks React is now designed to be strictly functional and all components should be created as functions instead of classes
- The primary hooks you will use are useState and useEffect [read docs here](https://reactjs.org/docs/hooks-intro.html)
- State should be contained to a component structure unless it is absolutely necessary for it to be lifted. If it needs to be lifted then we can do that with the context API or our global state service.
- Use default props when a component requires a default prop to render
- Utilize MUI components as much as possible

## Formatting
- In general, utilize es6 + syntax when writing javascript
- Prefer const and let to var
- Prefer arrow functions for components and functions declarations
- Prefer ternaries for simple if else statements
- Prefer inline arrow function for onChange events that simply need to call a function
- Avoid inline styles and CSS in javascript
- Use camelCase file naming for react files
- React component names are Capitalized (ex: CamelCase)
- Utilize array methods like .map, .filter, .forEach, .reduce for readability and simplicity
- Utilize lodash for readability and simplicity

```
const ExamplePage = () => {
  const [password, setPassword] = useState('')

  const handleChange = () => {
    localStorage.setItem('password', password)
    setPassword('')
  }

  return (
    localStorage.getItem('password') === process.env.REACT_APP_PASSWORD
    ? <App />
    : <Row justify='center' align='middle'>
        <Col span={10}>
          <Card title='Chocolate Chip Cookies'>
            <Space size='middle' direction='vertical'>
              <Input.Password placeholder="input password"
                              onChange={e => {setPassword(e.target.value)}}
                              iconRender={visible => (visible ? <CookieIcon /> : <EmptyBakingSheet />)}
              />
              <Button onClick={handleChange}>Submit</Button>
            </Space>
          </Card>
        </Col>
      </Row>
  );
}

export default ExamplePage
```

## Original Create React App Readme Links
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Documentation](https://reactjs.org/)
- [Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
- [Analyzing the Bundle Size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
- [Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
- [Advanced Configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
- [Deployment](https://facebook.github.io/create-react-app/docs/deployment)
- [Yarn Build Fails to Minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
