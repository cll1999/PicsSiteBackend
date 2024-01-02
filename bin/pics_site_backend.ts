#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { PicsSiteBackendStack } from '../lib/pics_site_backend-stack';

const app = new cdk.App();
new PicsSiteBackendStack(app, 'PicsSiteBackendStack');
