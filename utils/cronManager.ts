import cron from "node-cron";

let currentJob: cron.ScheduledTask | null = null;

export function startCronJob(schedule = "*/5 * * * *", task = () => {}) {
    currentJob = cron.schedule(schedule, task);
    currentJob.start();
    console.log("Started cron job.");
}

export function stopCronJob() {
    if (currentJob) {
        console.log("Stopping cron job.");
        currentJob.stop();
        currentJob = null;
    }
}
export const isCronRunning = () => !!currentJob;
