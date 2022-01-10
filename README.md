## Produce (V2)
Produce is a web app that serves as a platform for farmers, garden hobbyists to advertise their home-grown produce and goods. You can sign up and create a booth to have your booth listed on the marketplace. If you don't want to make a booth, you can signup and follow your favorite booths to see what kind of new goods that they have in season.

## Repo Setup
After you have cloned the repo to your computer make sure you make the following change to your git config file by running the command below. This needs to be in sync with the dev team or it will cause filename issues in git.
- `git config core.ignorecase false`

## Local Docker Setup
Download and install the [Docker App](https://www.docker.com/products/docker-desktop)

Using your bash terminal perform the following commands
- `cd into produce`
- `COMPOSE_HTTP_TIMEOUT=300 docker-compose -f docker-compose.dev.yml up --build`

You should now be able to view the running app in the docker desktop view and interact with each container from there. You will fine a link off to the react app and app-api or simply visit the following

* client at localhost:3000
* api at localhost:8000

You should alias the following commands in your ~./zshrc file for an easy docker dev workflow
```
alias produce_build='COMPOSE_HTTP_TIMEOUT=300 docker-compose -f docker-compose.dev.yml up --build'
alias produce_up='COMPOSE_HTTP_TIMEOUT=300 docker-compose -f docker-compose.dev.yml up'
alias produce_down='COMPOSE_HTTP_TIMEOUT=300 docker-compose -f docker-compose.dev.yml down -v'
```
### When Adding New NPM Packages ###
When adding a new npm package you will need to stop your local docker environment with ctrl + c and then run the above alias `produce_down`. The -v flag in that alias will clear out your local volumes and then when you rebuild the new npm package will be available.
- stop server
- produce_down
- produce_build

#### Useful Docker Commands
You may want to see running docker containers or cleanup volume storage from time to time
* List all containers `docker ps`
* List all volumes `docker volume ls`
* Remove unused volumes `docker volume prune`

<!-- ## CI/CD and Branching Strategy
#### Continuous Deployment:
  * Any commits to staging or pull requests merged into staging will auto deploy to staging env (when we have one)
  * Any commits or pull requests merged into master will deploy to master (this can be changed to trigger when a release is made if we would like that after we go live)
#### Continuous Integration:
  * Tests will run when a PR is created on any branch and on all following PR commits
  * Test will run again before the deploy script when commits are merged into master/staging -->

## Branching
* Main and Staging are permanent branches and merging into them dictates a release of feature work
* Feature branches are branched off of master and will be deleted on merge
  * branches off of a feature branch should contain the original branch name
  * this makes it easy to always know what you branched off of and what PR is to be merged into what branch
  * In the event that you need to add something to a feature branch after it has been merged simply create a new branch instead of trying to resurrect the merged branch
```
- main
  - staging
  - feature-name
    - feature-name--subfeature-name
```

## Notable Libraries/Resources Utilized
Front End
* [React Router](https://reactrouter.com/web/guides/quick-start)
* [Material UI]()
* [Redux Tool Kit]()
* [Lodash]()

Back End
* [Express Boilerplate]()

Testing
* [Jest](https://jestjs.io/)
* [React Testing Library]()

Infrastructure
* React Single Page Application
* Node/Express
* MongoDB
* Docker without DockerHub

------------------------------------
## Code Style Guide and More
Please read the following readme files for more info on our app
* [client/README.md]()
* [api/README.md]()
------------------------------------
