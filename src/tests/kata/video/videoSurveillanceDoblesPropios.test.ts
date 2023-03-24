import { MotionSensor, VideoRecorder, VideoController } from '../../../core/kata/video/videoSurveillance';


describe("The Surveillance Controller", () => {
    it("asks the recorder to stop recording wher the sensor detects no motion", () => {
        const motionSensor = new StubMotionSensorDetectingNoMotion();
        const videoRecorder = new VideoRecorderStub();
        const videoController = new VideoController(motionSensor, videoRecorder);
        videoController.recordMotion();
        expect(videoRecorder.recording).toBeFalsy();

    })

    it("asks the recorder to start recording wher the sensor detects no motion", () => {
        const motionSensor = new StubMotionSensorDetectingMotion();
        const videoRecorder = new VideoRecorderStub();
        const videoController = new VideoController(motionSensor, videoRecorder);
        videoController.recordMotion();
        expect(videoRecorder.recording).toBeTruthy();

    })

})


export class StubMotionSensorDetectingNoMotion implements MotionSensor {


    isDetectingMotion(): boolean {
        return false;
    }

}

export class StubMotionSensorDetectingMotion implements MotionSensor {


    isDetectingMotion(): boolean {
        return true;
    }

}

export class VideoRecorderStub implements VideoRecorder {


    recording: Boolean = false;

    startRecording(): void {
        this.recording = true;
        //  console.log('start recording');
    }
    stopRecording(): void {
        this.recording = false;
        //console.log('stop recording');

    }

}
