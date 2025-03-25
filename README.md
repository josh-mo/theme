*Use of this software is subject to important terms and conditions as set forth in the License file*

# React App Scaffold

## Description

This repo contains a scaffold to help developers build [apps for Zendesk products](https://developer.zendesk.com/apps/docs/apps-v2/getting_started).

## Getting Started

### Dependencies

- [Node.js](https://nodejs.org/en/) >= 18.12.1
- [Ruby](https://www.ruby-lang.org/) = 2.6.x

### Setup

1. Clone or fork this repo
2. Change (`cd`) into the `app_scaffolds/packages/react` directory
3. Run `pnpm install`

To run your app locally in Zendesk, you need the latest [Zendesk CLI](https://github.com/zendesk/zcli).

### Running locally

To serve the app to your Zendesk instance with `?zcli_apps=true`, follow the steps below based on your environment:

#### Development Environment

1. Open a new terminal and run the command:

```
pnpm run dev
```

2. Open another terminal in the `app_scaffolds/packages/react` directory and run:

```
pnpm run start
```

> **Note:** Running the `pnpm run dev` command enables Hot Module Replacement (HMR), which allows you to see the changes you make to your code immediately without having to manually refresh the page. This greatly enhances the development experience.

#### Production Environment

1. Open a new terminal and run the command:

```
pnpm run build
```

2. Open another terminal in the `app_scaffolds/packages/react` directory and run:

```
pnpm run start:prod
```

## Deploying

To check that your app will pass the server-side validation check, run

```
zcli apps:validate dist
```

If validation is successful, you can upload the app into your Zendesk account by running

```
zcli apps:create dist
```

To update your app after it has been created in your account, run

```
zcli apps:update dist
```

Or, to create a zip archive for manual upload, run

```
zcli apps:package dist
```
