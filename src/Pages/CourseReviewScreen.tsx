import LabelTextInput from "../Components/Forms/LabelTextInput";
import DesktopProfileBar from "../Components/ProfileBars/DesktopProfileBar";
import HeadingParagraphyBase from "../Components/Text/HeadingParagraphyBase";
import DesktopLayout from "../Layouts/DesktopLayout";
import Family from "../assets/family2.png";

const CourseReviewScreen = () => {
  return (
    <DesktopLayout>
      <div>
        <DesktopProfileBar />
        <div className="ml-[24px] mr-[45px]">
          <HeadingParagraphyBase
            heading="Course Content Review"
            paragraph="Kindly review content before publishing."
          />
        </div>
        <div className="px-4">
          <div className="flex gap-x-6">
            <img
              className="border border-solid border-lerndis-light-grey w-[400px] h-[300]"
              src={Family}
              alt=""
            />
            <div className="font-body">
              <HeadingParagraphyBase
                heading="Family: Everything family should know"
                paragraph="Social Studies"
              />
              <h2 className="text-base text-lerndis-blue">Introduction</h2>
              <p className="text-lerndis-light-grey text-sm/[24px]">
                Family, the fundamental unit of society, is a diverse and
                complex tapestry woven with threads of love, support, and shared
                experiences. It's a haven of comfort and belonging, where
                individuals connect through bonds forged by blood, marriage, or
                simply the shared human experience. Across cultures and time
                periods, families have taken many forms. The traditional nuclear
                family, consisting of parents and their children, remains a
                common image. However, extended families, blended families,
                single-parent families, and chosen families are all equally
                valid and vibrant expressions of family life.
              </p>
            </div>
          </div>
            <form className="flex gap-x-[120px]">
              <div className="w-1/2 flex flex-col gap-y-5">
                <div>
                  <LabelTextInput
                    label="Outline 1"
                    placeholder="Understanding the family"
                  />
                </div>
                <div>
                  <LabelTextInput
                    label="Outline 2"
                    placeholder="Understanding the family"
                  />
                </div>
                <div>
                  <LabelTextInput
                    label="Outline 3"
                    placeholder="Understanding the family"
                  />
                </div>
              </div>
              <div className="w-1/2 flex flex-col gap-y-5">
                <div>
                  <LabelTextInput
                    label="Outline 4"
                    placeholder="Understanding the family"
                  />
                </div>
                <div>
                  <LabelTextInput
                    label="Outline 5"
                    placeholder="Understanding the family"
                  />
                </div>
              </div>
            </form>
        </div>
      </div>
    </DesktopLayout>
  );
};

export default CourseReviewScreen;
