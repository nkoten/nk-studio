
using UnityEditor;
using UnityEngine;

public class PrototypeChecklistWindow : EditorWindow
{
    private bool[] checks = new bool[20];
    private string[] labels =
    {
        "Unity instalado",
        "Projeto criado",
        "Corgi importado",
        "Cena base criada",
        "Player funcionando",
        "Interação criada",
        "Inimigo FSM",
        "Símbolos funcionando",
        "Loop completo",
        "Build testado"
    };

    [MenuItem("NK Studios/Prototype Checklist")]
    public static void Open()
    {
        GetWindow<PrototypeChecklistWindow>("Prototype Checklist");
    }

    private void OnEnable()
    {
        for (int i = 0; i < labels.Length; i++)
            checks[i] = EditorPrefs.GetBool("NK_CHECK_" + i, false);
    }

    private void OnGUI()
    {
        GUILayout.Label("NK Studios – Checklist de Protótipo", EditorStyles.boldLabel);
        GUILayout.Space(10);

        for (int i = 0; i < labels.Length; i++)
        {
            bool newValue = EditorGUILayout.ToggleLeft(labels[i], checks[i]);
            if (newValue != checks[i])
            {
                checks[i] = newValue;
                EditorPrefs.SetBool("NK_CHECK_" + i, newValue);
            }
        }
    }
}

