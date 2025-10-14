import Head from 'next/head';

export default function StudentCodeOfConduct() {
  return (
    <>
      <Head>
        <title>Student Code of Conduct | Educational Institute</title>
        <meta name="description" content="Student Code of Conduct guidelines for maintaining a professional and respectful learning environment. Learn about classroom expectations, misconduct examples, and consequences." />
        <meta name="keywords" content="student code of conduct, classroom behavior, educational policies, student guidelines, academic conduct, classroom etiquette" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Student Code of Conduct - Educational Institute" />
        <meta property="og:description" content="Guidelines for student behavior and classroom conduct in educational settings" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourdomain.com/student-code-of-conduct" />
      </Head>

      <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-200 py-18 px-3 sm:px-6 lg:px-8">
        <div className="max-w-screen mx-auto">
          <article className="bg-white rounded-xl shadow-2xl p-8 sm:p-12 lg:p-16 border-l-8 border-blue-700">
            
            {/* Header */}
            <header className="text-center mb-6 pb-8 border-b-4 border-blue-700">
              <div className="text-lg sm:text-xl text-gray-600 mb-1 font-light tracking-wider">
                Educational Institute
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-blue-700 font-bold">
                Student Code of Conduct
              </h1>
            </header>

            {/* Section 1: Introduction */}
            <section className="mb-2">
              <h2 className="text-2xl sm:text-3xl text-blue-700 font-semibold mb-6 pb-3 border-b-2 border-gray-200">
                <span className="inline-block bg-blue-700 text-white px-4 py-2 rounded-full  sm:text-lg font-semibold mr-4">
                  1
                </span>
                Student Code of Conduct
              </h2>
              
              <p className="  text-gray-700 text-justify mb-2 leading-relaxed">
                In preparing our students for respective careers in their domain, it is essential that we strive for the highest levels of professionalism. Central to that objective is the development of a respectful and professional atmosphere in and around the classroom. It is expected that both students and professors will treat each other as well as visitors to the faculty with respect and consideration.
              </p>
              
              <p className=" text-gray-700 text-justify mb-2 leading-relaxed">
                All students have the right to learn without interference from others. Faculty members have the authority to protect this right by creating and maintaining an environment that is conducive to learning. Towards this end, the management has developed the following Code of Classroom Conduct.
              </p>
              
              <p className="  text-gray-700 text-justify mb-2 leading-relaxed">
                Students are required and expected to conduct themselves in a mature and considerate manner. Students should conduct and express themselves in a way that is respectful to all individuals. This includes respecting the rights of others to comment and participate fully in class.
              </p>
              
              <div className="bg-green-100 border-l-4 border-green-600 rounded-lg p-5 sm:p-6 italic text-green-900">
                <strong className="not-italic">Important:</strong> Classroom misconduct is any behaviour which disrupts or interferes with the learning environment.
              </div>
            </section>

            {/* Section 2: Examples of Misconduct */}
            <section className="mb-2">
              <h2 className="text-2xl sm:text-3xl text-blue-700 font-semibold mb-6 pb-3 border-b-2 border-gray-200">
                <span className="inline-block bg-blue-700 text-white px-4 py-2 rounded-full  sm:text-lg font-semibold mr-4">
                  2
                </span>
                Examples of Classroom Misconduct
              </h2>
              
              <p className=" sm:text-lg text-gray-700 mb-6">
                <span className="font-semibold text-blue-700">Includes, but is not limited to, the following:</span>
              </p>
              
              <div className="bg-gray-50 border-l-4 border-red-500 rounded-lg p-6 sm:p-8">
                <div className="space-y-5">
                  
                  <div className="bg-white border-l-4 border-red-500 rounded-md p-4 sm:p-5 shadow-sm">
                    <strong className="text-gray-900  sm:text-lg">Disruptive Behavior:</strong>
                    <p className="mt-2 text-gray-700 text-sm sm: leading-relaxed">
                      Engaging in behaviour that disrupts or interferes with the learning environment. Behaviour such as, but not limited to, talking in class while the faculty member or other students are speaking, using offensive language, creating distractions or disturbances, sleeping, reading unrelated materials, and moving about the classroom is, in many situations, considered disruptive behaviour to the learning process.
                    </p>
                  </div>

                  <div className="bg-white border-l-4 border-red-500 rounded-md p-4 sm:p-5 shadow-sm">
                    <strong className="text-gray-900  sm:text-lg">Lack of Preparation:</strong>
                    <p className="mt-2 text-gray-700 text-sm sm: leading-relaxed">
                      Students and professors must come to class prepared for that day's topic and ready to engage themselves.
                    </p>
                  </div>

                  <div className="bg-white border-l-4 border-red-500 rounded-md p-4 sm:p-5 shadow-sm">
                    <strong className="text-gray-900  sm:text-lg">Electronic Device Misuse:</strong>
                    <p className="mt-2 text-gray-700 text-sm sm: leading-relaxed">
                      Using cell phones or other electronic devices that disrupt the learning process or teaching environment. Faculty members have the right to restrict/cease the use of electronic devices in their classrooms.
                    </p>
                  </div>

                  <div className="bg-white border-l-4 border-red-500 rounded-md p-4 sm:p-5 shadow-sm">
                    <strong className="text-gray-900  sm:text-lg">Inappropriate Laptop Use:</strong>
                    <p className="mt-2 text-gray-700 text-sm sm: leading-relaxed">
                      Use of laptop should be at the discretion of the professor and should be made clear by him/her. If they are allowed, they should only be used to support that day's material (i.e., taking notes, using the web as directed by the professor). Checking email, surfing the web for non-class related topics, chatting on the net, or working on other projects are not acceptable forms of behavior.
                    </p>
                  </div>

                  <div className="bg-white border-l-4 border-red-500 rounded-md p-4 sm:p-5 shadow-sm">
                    <strong className="text-gray-900  sm:text-lg">Tardiness and Early Departure:</strong>
                    <p className="mt-2 text-gray-700 text-sm sm: leading-relaxed">
                      Entering the classroom late or leaving the classroom prior to the end of class may be considered a disruption to the learning environment.
                    </p>
                  </div>

                </div>
              </div>
            </section>

            {/* Section 3: Consequences */}
            <section className="mb-4">
              <h2 className="text-2xl sm:text-3xl text-blue-700 font-semibold mb-6 pb-3 border-b-2 border-gray-200">
                <span className="inline-block bg-blue-700 text-white px-4 py-2 rounded-full  sm:text-lg font-semibold mr-4">
                  3
                </span>
                Consequences of Classroom Misconduct at the Institute
              </h2>
              
              <p className="  text-gray-700 text-justify mb-2 leading-relaxed">
                Students engaged in classroom misconduct are subject to classroom penalties and conduct sanctions. <span className="font-semibold text-blue-700">Withdrawal from a course does not exempt a student from any pending charges of classroom misconduct.</span>
              </p>
              
              <p className="  text-gray-700 text-justify mb-2 leading-relaxed">
                The faculty member may make a referral to the conduct office for additional investigation and potential institutional sanctions in addition to any one or more of the following penalties which sanctions may be imposed by the faculty member for any classroom misconduct violation:
              </p>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6 sm:p-8">
                <div className="space-y-4">
                  
                  <div className="pb-4 border-b border-gray-200">
                    <strong className="text-gray-900  sm:text-lg">Warning:</strong>
                    <p className="mt-1 text-gray-700 text-sm sm:">
                      An oral explanation by the institute official of violation and possible consequences if misconduct continues
                    </p>
                  </div>

                  <div className="pb-4 border-b border-gray-200">
                    <strong className="text-gray-900  sm:text-lg">Class Dismissal:</strong>
                    <p className="mt-1 text-gray-700 text-sm sm:">
                      Dismissal from the remaining class time during which the infraction occurs
                    </p>
                  </div>

                  <div className="pb-4 border-b border-gray-200">
                    <strong className="text-gray-900  sm:text-lg">Dismissal with Required Meeting:</strong>
                    <p className="mt-1 text-gray-700 text-sm sm:">
                      Dismissal from the remaining class time during which the infraction occurs, with required meeting with designated college employee (faculty member, Department Head, or Associate Dean) prior to returning to class
                    </p>
                  </div>

                  <div className="pb-4 border-b border-gray-200">
                    <strong className="text-gray-900  sm:text-lg">Grade Reduction on Assignment:</strong>
                    <p className="mt-1 text-gray-700 text-sm sm:">
                      Assignment of a reduced or failing grade on an assignment, paper, project or exam
                    </p>
                  </div>

                  <div className="pb-4 border-b border-gray-200">
                    <strong className="text-gray-900  sm:text-lg">Course Grade Reduction:</strong>
                    <p className="mt-1 text-gray-700 text-sm sm:">
                      Reduction in the final grade for the course
                    </p>
                  </div>

                  <div>
                    <strong className="text-gray-900  sm:text-lg">Mandatory Meeting:</strong>
                    <p className="mt-1 text-gray-700 text-sm sm:">
                      Required meeting with the faculty member and/or a college official if necessary
                    </p>
                  </div>

                </div>
              </div>
            </section>

          </article>
        </div>
      </div>
    </>
  );
}