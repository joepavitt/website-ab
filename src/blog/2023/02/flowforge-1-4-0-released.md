---
title: FlowForge v1.4 with device provisioning in bulk and staged development process
subtitle: Our second release of 2023 with some great new features to try out.
description: Deploy Node-RED to many devices quickly, and allow a staged development process with the latest release of FlowForge v1.4.
date: 2023-02-16 14:00:00.0
authors: ["ian-skerrett"]
video: vbg4zTmUYjQ
image: /blog/2023/02/images/ff-r14-image.png
---

Deploy Node-RED to many devices quickly, and allow a staged development process with the latest release of FlowForge v1.4.

<!--more-->

Keep reading for the details of what's in this release or you can watch our 1 minute roundup video of the new release above.

To make it easy for everyone to experience FlowForge, we are introducing a new free 30-day trial. You can now experience the power of using FlowForge to quickly deliver Node-RED applications in a reliable, repeatable, collaborative, and secure manner. To get your free trial simply [sign up for FlowForge Cloud;](https://app.flowforge.com/account/create) no credit card is required!

## New User Features


**Automatic Device Provisioning**

Most prominently, FlowForge 1.4 features automatic device onboarding for fleets. Simply download a FlowForge device provisioning credential to allow quick roll-out to a whole fleet, without the need to have device specific configuration. When the agent starts, the FlowForge agent and the Node-RED snapshot will automatically be provisioned to the device and start operations. [Issue #1212](https://github.com/flowforge/flowforge/issues/1212)


<div><iframe width="560" height="315" src="https://www.youtube.com/embed/XTVw4O4-Crg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Support for Staged Development**

A new feature of 1.4 is the ability to setup staged deployments. This makes it possible to simply move a project between a Development > Test > Production for your Node-RED application delivery. [Issue #1580](https://github.com/flowforge/flowforge/issues/1580)


<div><iframe width="560" height="315" src="https://www.youtube.com/embed/6QOmotlrwWw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Improvements

- It's now much easier to change the resources available to your Node-RED instance. With a few clicks a resource intensive workload can be processed faster by changing between small, medium, or large instance types. [#595](https://github.com/flowforge/flowforge/issues/595)

- Last release allows users to capture flows in a shared library to reuse in another flow, now it's possible to preview the stored flows. [#1657](https://github.com/flowforge/flowforge/issues/1657)

- Add a synchronous mode for the FlowForge persisted context store, next to the asynchronous mode already available. [#17](https://github.com/flowforge/flowforge-nr-persistent-context/issues/17)

- Add a Last Seen status for devices connecting to FlowForge. [#1599](https://github.com/flowforge/flowforge/issues/1599)

- Added a check to ensure the team slug is unique. [#1609](https://github.com/flowforge/flowforge/issues/1609)

- Optionally set snapshot as target at creation, to quickly roll out changes to remote deployments [#1527](https://github.com/flowforge/flowforge/issues/1527)
- Agents are more rugged when starting up if they're unable to connect to FlowForge, and will retry to connect.

- With FlowForge v1.4 some changes were made under the hood to speed up the recovery
of Node-RED instances. On terminal failures of an instance it will now be
automatically be redeployed with the correct flows. This uses Kubernetes features
and is also available if you've installed through [kubernetes](https://flowforge.com/docs/install/kubernetes/).
To migrate the old style of deployments to this system a restart or stack upgrade is needed.

## Bug Fixes

We've fixed the following bugs in this release.
- Deleting your only team, doesn't exit from the team UI. [#1630](https://github.com/flowforge/flowforge/issues/1630)
- Async Team Slug Check. [#1609](https://github.com/flowforge/flowforge/issues/1609)
- Improve communication of Device Last Seen and Status [#1599](https://github.com/flowforge/flowforge/issues/1599)


## Contributors

We'd like the thank the following for their contributions to this release:
- [UlisesGascon](https://github.com/UlisesGascon) for their work on [#74](https://github.com/flowforge/installer/pull/74)

As an open-source project, we welcome community involvement in what we're building.
If you're interested in contributing, checkout our [guide in the docs](https://flowforge.com/docs/contribute/).

## Try it out

We're confident you can have self managed FlowForge running locally in under 30 minutes.
You can install our [local build](https://flowforge.com/docs/install/local/), use [Docker](https://flowforge.com/docs/install/docker/), or [Kubernetes](https://flowforge.com/docs/install/kubernetes/).

If you'd rather use our hosted offering: [Get started for free](https://app.flowforge.com/account/create) on FlowForge Cloud.

## Upgrading FlowForge

[FlowForge Cloud](https://app.flowforge.com) is already running 1.4.

If you installed a previous version of FlowForge and want to upgrade, our documentation provides a
guide for [upgrading your FlowForge instance](https://flowforge.com/docs/upgrade/).

## Getting help

Please check FlowForge's [documentation](https://flowforge.com/docs/) as the answers to many questions are covered there.

If you hit any problems with the platform please raise an [issue on GitHub](https://github.com/flowforge/flowforge/issues).
That's also a great place to send us any feedback or feature requests.

You can also get help on [the Node-RED forums](https://discourse.nodered.org/)

As well as in the [forum within our Github project](https://github.com/flowforge/flowforge/discussions)

Chat with us on the `#flowforge` channel on the [Node-RED Slack workspace](https://nodered.org/slack)

You can raise a support ticket by emailing [support@flowforge.com](mailto:support@flowforge.com)

We've also added a live chat widget to our website, you can access it using the icon on the bottom right corner of our website. We'd love to hear from you.
