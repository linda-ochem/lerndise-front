import ButtonFull from "../Components/Buttons/ButtonFull";
import ButtonHalf from "../Components/Buttons/ButtonHalf";
import GenerateButton from "../Components/Buttons/GenerateButton";
import LabelTextInput from "../Components/Forms/LabelTextInput";
import HeadingParagraphy from "../Components/Text/HeadingParagraphy";
import DesktopLayout from "../Layouts/DesktopLayout";

const CourseContentScreen = () => {
  return (
    <DesktopLayout>
      <div>
        <div className="border-b border-solid border-[#CCCCCC] h-[72px] mb-[32px]"></div>
        <div className="ml-[24px] mr-[45px]">
          <HeadingParagraphy
            heading="Course Content"
            paragraph="Kindly add the course outline and let the AI help you generate learning resources."
          />
          <form className="flex gap-x-[120px]">
            <div className="w-1/2 flex flex-col gap-y-5">
              <div>
                <LabelTextInput
                  label="Outline 1"
                  placeholder="Understanding the family"
                />
                <GenerateButton />
              </div>
              <div>
                <LabelTextInput
                  label="Outline 2"
                  placeholder="Understanding the family"
                />
                <GenerateButton />
              </div>
              <div>
                <LabelTextInput
                  label="Outline 3"
                  placeholder="Understanding the family"
                />
                <GenerateButton />
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-y-5">
              <div>
                <LabelTextInput
                  label="Outline 4"
                  placeholder="Understanding the family"
                />
                <GenerateButton />
              </div>
              <div>
                <LabelTextInput
                  label="Outline 5"
                  placeholder="Understanding the family"
                />
                <GenerateButton />
              </div>
              <ButtonFull>Add New Outline</ButtonFull>
              <div className="flex gap-x-6">
                <ButtonHalf>Save as draft</ButtonHalf>
                <ButtonHalf skin="lerndis-black-pearl" color="white">
                  Next
                </ButtonHalf>
              </div>
            </div>
          </form>
        </div>
      </div>
    </DesktopLayout>
  );
};

export default CourseContentScreen;
