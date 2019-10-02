# node-saga-pm

This is prototype of saga implementation, written in Node.

## Tasks

- [x] Workflow Definition
- [x] Task Definition
- [x] Workflow Instance
- [x] Task Instance
- [x] State Translation
- [x] Store
- [x] Refacetor code, move to their's domain
- [x] Dispatcher
- [x] Consumer
- [x] Config
- [ ] Logger
- [ ] Use custom error
- [x] Clean up completed workflows/tasks
- [x] Delay dispatcher
- [ ] Cron job
- [x] Failed workflow handling
- [x] Timeout workflow handling
- [ ] Cancle workflow
- [x] Event store
- [x] Compensate workflow
- [x] Publish event to kafka
- [x] Update Workflow/Transaction's output
- [x] Time keeper
- [ ] Refactor redundant action in "STATE"
- [x] Watch for workflowDefinition changed
- [ ] Rewrite all the test XD
- [ ] Instance delete retention
- [ ] Graceful shutdown

## Known issues

- [ ] parallel tasks can be empty
- [ ] Sub workflow won't get compensate
- [x] Task/Workflow data send as string's ISO time format instead of number
- [ ] Workflow Definition can have random task name
- [ ] MongoDB not fast enough for 5000 concurent (Lag)
