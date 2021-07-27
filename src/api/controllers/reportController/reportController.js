const Patient = require('../../models/Patient');
const Exam = require('../../models/Exam');
const Treatment = require('../../models/Treatment');
const Notification = require('../../models/Notification');
const Observation = require('../../models/Observation');

exports.getReport = async (req, res) => {
  try {
    /* Patients */

    const numberOfPatients = await Patient.countDocuments({});

    const numberOfFemalePatients = await Patient.countDocuments({
      sex: 'Feminino',
    });

    const numberOfMalePatients = await Patient.countDocuments({
      sex: 'Masculino',
    });

    const numberOfIntersexPatients = await Patient.countDocuments({
      sex: 'Intersexo',
    });

    const acquiredSyphilisOcurrences = await Patient.countDocuments({
      monitoringType: 'Sífilis adquirida',
    });

    const congenitalSyphilisOcurrences = await Patient.countDocuments({
      monitoringType: 'Sífilis congênita',
    });

    const gestationalSyphilisOcurrences = await Patient.countDocuments({
      monitoringType: 'Sífilis em gestante',
    });

    // /* Exames */

    const numberOfExams = await Exam.countDocuments({});
    const numberOfQuickTests = await Exam.countDocuments({
      trepTestType: 'Teste rápido',
    });
    const numberOfIgMTests = await Exam.countDocuments({
      trepTestType: 'FTA-ABS IgM',
    });
    const numberOfIgGTests = await Exam.countDocuments({
      trepTestType: 'FTA-ABS IgG',
    });
    const numberOfReagentResults = await Exam.countDocuments({
      trepTestResult: 'Reagente',
    });
    const numberOfNonReagentResults = await Exam.countDocuments({
      trepTestResult: 'Não-reagente',
    });

    /* Notificações */

    const numberOfNotifications = await Notification.countDocuments({});

    /* Observações */

    const numberOfObservations = await Observation.countDocuments({});

    // /* Tratamentos */

    const numberOfTreatments = await Treatment.countDocuments({});
    const numberOfTreatmentsUsingPenilicillin = await Treatment.countDocuments({
      medication: 'Penicilina',
    });
    const numberOfTreatmentsUsingDoxycycline = await Treatment.countDocuments({
      medication: 'Doxiciclina',
    });
    const numberOfTreatmentsUsingCeftriaxone = await Treatment.countDocuments({
      medication: 'Ceftriaxona',
    });

    res.status(200).json({
      status: 'success',
      message: 'On development...',
      stats: {
        numberOfPatients,
        numberOfFemalePatients,
        numberOfMalePatients,
        numberOfIntersexPatients,
        acquiredSyphilisOcurrences,
        congenitalSyphilisOcurrences,
        gestationalSyphilisOcurrences,
        numberOfExams,
        numberOfQuickTests,
        numberOfIgMTests,
        numberOfIgGTests,
        numberOfReagentResults,
        numberOfNonReagentResults,
        numberOfNotifications,
        numberOfObservations,
        numberOfTreatments,
        numberOfTreatmentsUsingPenilicillin,
        numberOfTreatmentsUsingDoxycycline,
        numberOfTreatmentsUsingCeftriaxone,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'failure',
      error,
    });
  }
};

/* exports.getReportByYear = async (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      message: 'On development...',
    });
  } catch (error) {
    res.status(400).json({
      status: 'failure',
      error,
    });
  }
};
 */
